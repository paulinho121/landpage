$creds = New-Object System.Net.NetworkCredential('if0_40111582','T8WTeVxG3gAUw')
function ListDir($path) {
  try {
    $req = [System.Net.FtpWebRequest]::Create($path)
    $req.Method = [System.Net.WebRequestMethods+Ftp]::ListDirectory
    $req.Credentials = $creds
    $res = $req.GetResponse()
    $sr = New-Object System.IO.StreamReader($res.GetResponseStream())
    $s = $sr.ReadToEnd()
    $sr.Close()
    $res.Close()
    $items = $s -split "`n" | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' }
    return $items
  } catch {
    return @()
  }
}

function Recurse($baseUrl, $relPath) {
  $fullUrl = if ($relPath -eq '') { $baseUrl } else { "$baseUrl/$relPath" }
  Write-Host "Listing: $fullUrl"
  $items = ListDir $fullUrl
  foreach ($it in $items) {
    $candidate = if ($relPath -eq '') { $it } else { "$relPath/$it" }
    Write-Host $candidate
    # try to list as directory
    $sub = ListDir ("$baseUrl/$candidate")
    if ($sub.Count -gt 0) {
      Recurse $baseUrl $candidate
    }
  }
}

Recurse 'ftp://ftpupload.net/htdocs' ''
