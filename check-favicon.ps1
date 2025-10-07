$u='http://cuckold.great-site.net/assets/book-cover-DML5caCI.png'
try {
  $r=Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
  Write-Host 'Status:' $r.StatusCode
  Write-Host 'Length:' $r.Content.Length
} catch { Write-Host 'ERROR:' $_ }
