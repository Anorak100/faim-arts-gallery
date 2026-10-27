$dest = "src/assets/reviews"
if (!(Test-Path $dest)) {
    New-Item -ItemType Directory -Force -Path $dest | Out-Null
}

$imgs = @(
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/Fears-defeated.jpeg"; file = "fears_defeated.jpeg" },
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/mr.femi-min.jpeg"; file = "mr_femi.jpeg" },
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/big%20mummy.jpg"; file = "big_mummy.jpg" },
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/egbon%20tobi-02-min.jpeg"; file = "egbon_tobi.jpeg" },
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/Miss%20Pelumi.JPG"; file = "miss_pelumi.jpg" },
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/Mr.%20Finidi.JPG"; file = "mr_finidi.jpg" },
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/Mr.%20Ifeanyi.JPG"; file = "mr_ifeanyi.jpg" },
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/Tosin(1).jpeg"; file = "tosin.jpeg" },
  @{ url = "https://friendly-mirzakhani-70e07f.netlify.app/Images/Gallery/Mr.Bolu.jpeg"; file = "mr_bolu.jpeg" }
)

foreach ($item in $imgs) {
  $target = Join-Path $dest $item.file
  Invoke-WebRequest -Uri $item.url -OutFile $target -UseBasicParsing
  Write-Output "Downloaded: $($item.file)"
}
