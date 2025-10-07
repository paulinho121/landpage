$creds = New-Object System.Net.NetworkCredential('if0_40111582','T8WTeVxG3gAUw')
function ListDir([string]$path) {
    try {
        $req = [System.Net.FtpWebRequest]::Create($path)
        $req.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
        $req.Credentials = $creds
        $res = $req.GetResponse()
        $sr = New-Object System.IO.StreamReader($res.GetResponseStream())
        $list = $sr.ReadToEnd()
        $sr.Close()
        $res.Close()
        return $list
    } catch {
        return "ERROR: $_"
    }
}

Write-Host "--- ROOT LIST ---"
Write-Host (ListDir 'ftp://ftpupload.net/htdocs/')
Write-Host "--- ASSETS LIST ---"
Write-Host (ListDir 'ftp://ftpupload.net/htdocs/assets/')
