$base = 'http://cuckold.great-site.net'
$paths = @(
  '/assets/index-BkhW1GAB.js',
  '/assets/assets/index-BkhW1GAB.js',
  '/assets/assets/assets/index-BkhW1GAB.js',
  '/assets/index-DeRCG1xJ.css',
  '/assets/assets/index-DeRCG1xJ.css',
  '/assets/assets/assets/index-DeRCG1xJ.css'
)
foreach ($p in $paths) {
  $url = $base + $p
  Write-Host "Checking: $url"
  try {
    $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
    Write-Host "  Status: $($r.StatusCode) - Length: $($r.Content.Length)"
  } catch {
    Write-Host "  ERROR: $_"
  }
}
