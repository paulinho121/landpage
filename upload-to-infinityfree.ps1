# Upload recursivo para InfinityFree via FTP (PowerShell)
# Uso: 
#   .\upload-to-infinityfree.ps1 -Host "ftpupload.net" -User "if0_40111582" -Pass "T8WTeVxG3gAUw" -LocalDir ".\\dist" -RemoteDir "/htdocs"
# Observação: este script usa FTP simples (sem TLS). InfinityFree aceita FTP padrão na porta 21.

param(
    [Parameter(Mandatory=$true)] [string]$HostName,
    [Parameter(Mandatory=$true)] [string]$User,
    [Parameter(Mandatory=$true)] [string]$Pass,
    [Parameter(Mandatory=$false)] [string]$LocalDir = ".\\dist",
    [Parameter(Mandatory=$false)] [string]$RemoteDir = "/htdocs"
)

function Write-VerboseLine { param($m) Write-Host "[upload] $m" }

# Gera lista de arquivos
$localItem = Get-Item $LocalDir
if (-not $localItem) { Throw "Local directory not found: $LocalDir" }
$localFull = $localItem.FullName.TrimEnd([System.IO.Path]::DirectorySeparatorChar, [System.IO.Path]::AltDirectorySeparatorChar)
$files = Get-ChildItem -Path $LocalDir -Recurse -File
Write-VerboseLine "Total files to upload: $($files.Count)"

foreach ($f in $files) {
    # calcula caminho relativo de forma segura
    $relative = $f.FullName.Substring($localFull.Length)
    # remove separadores iniciais (both \ and /)
    $relative = $relative.TrimStart([System.IO.Path]::DirectorySeparatorChar, [System.IO.Path]::AltDirectorySeparatorChar)
    $relative = $relative -replace '\\','/'

    # Normaliza o caminho remoto para usar '/' e sem duplicações
    $remotePath = ($RemoteDir.TrimEnd('/') + '/' + $relative) -replace '\\','/'
    $remotePath = $remotePath -replace '/{2,}','/'
    # Remove eventual leading slash para que o URI seja ftp://host/htdocs/...
    if ($remotePath.StartsWith('/')) { $remotePath = $remotePath.TrimStart('/') }

    # calcula diretório remoto (sem o arquivo)
    $lastSlash = $remotePath.LastIndexOf('/')
    if ($lastSlash -ge 0) { $remoteDir = $remotePath.Substring(0, $lastSlash) } else { $remoteDir = '' }

    # Criar diretórios remotos segmento a segmento (somente se houver diretório)
    if (-not [string]::IsNullOrEmpty($remoteDir)) {
        $dirToCreate = $remoteDir.Split('/') | Where-Object { $_ -ne '' }
        $acc = ''
        foreach ($seg in $dirToCreate) {
            if ([string]::IsNullOrEmpty($acc)) { $acc = $seg } else { $acc = "$acc/$seg" }
            $uriDir = "ftp://$HostName/$acc"
            try {
                $req = [System.Net.FtpWebRequest]::Create($uriDir)
                $req.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
                $req.Credentials = New-Object System.Net.NetworkCredential($User,$Pass)
                $req.GetResponse() | Out-Null
                Write-VerboseLine "Created remote dir: $acc"
            } catch {
                # ignore errors (directory may already exist)
            }
        }
    }

    # Upload file
    $uri = "ftp://$HostName/$remotePath"
    Write-VerboseLine "Uploading $relative -> $remotePath"
    try {
        $req = [System.Net.FtpWebRequest]::Create($uri)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $req.Credentials = New-Object System.Net.NetworkCredential($User,$Pass)
        $req.UseBinary = $true
        $req.UsePassive = $true

        $fileBytes = [System.IO.File]::ReadAllBytes($f.FullName)
        $req.ContentLength = $fileBytes.Length
        $rs = $req.GetRequestStream()
        $rs.Write($fileBytes,0,$fileBytes.Length)
        $rs.Close()
        $res = $req.GetResponse()
        $res.Close()
        Write-VerboseLine "Uploaded: $relative"
    } catch {
        Write-Host "Failed to upload $relative. Error: $_" -ForegroundColor Red
    }
}

Write-Host "Upload complete." -ForegroundColor Green
