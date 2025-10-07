$urls = @('http://cuckold.great-site.net/assets/index-BkhW1GAB.js','http://cuckold.great-site.net/assets/index-DeRCG1xJ.css','http://cuckold.great-site.net/assets/book-cover-DML5caCI.png')
foreach ($u in $urls) {
  Write-Host "Checking: $u"
  try {
    $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
    Write-Host "  Status: $($r.StatusCode) - Length: $($r.Content.Length)"
  } catch {
    Write-Host "  ERROR: $_"
  }
}
