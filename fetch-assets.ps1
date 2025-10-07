$urls = @(
  'http://cuckold.great-site.net/assets/index-BkhW1GAB.js',
  'http://cuckold.great-site.net/assets/index-DeRCG1xJ.css',
  'http://cuckold.great-site.net/favicon.ico',
  'http://cuckold.great-site.net/.htaccess'
)
foreach ($u in $urls) {
  Write-Host "Checking: $u"
  try {
    $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
    Write-Host " Status: $($r.StatusCode); Length: $($r.Content.Length)"
    $snippet = if ($r.Content.Length -gt 400) { $r.Content.Substring(0,400) + '...' } else { $r.Content }
    Write-Host $snippet
  } catch {
    Write-Host " ERROR: $_"
  }
  Write-Host ""
}
