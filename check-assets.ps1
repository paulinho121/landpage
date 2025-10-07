$urls = @(
  'http://cuckold.great-site.net/assets/index-BkhW1GAB.js',
  'http://cuckold.great-site.net/assets/index-DeRCG1xJ.css',
  'http://cuckold.great-site.net/favicon.ico',
  'http://cuckold.great-site.net/.htaccess'
)
foreach ($u in $urls) {
  Write-Host "--- $u"
  try {
    $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
    Write-Host "Status: $($r.StatusCode)"
    $c = $r.Content
    if ($c.Length -gt 400) { $c = $c.Substring(0,400) + '...' }
    Write-Host $c
  } catch {
    Write-Host "ERROR: $_"
  }
}
