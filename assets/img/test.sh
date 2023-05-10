#!/bin/bash

# List of image files
image_files=(
    sinister.jpeg
    adele.jpeg
    aquietplace.jpeg
    artist.jpeg
    cure.jpeg
    download.svg
    einaudi.jpeg
    favicon.ico
    home.svg
    libreria.svg
    logo-small.svg
    logo.svg
    meditation.jpeg
    metal_lifting.jpg
    mixdaily.jpeg
    piano.jpeg
    player_left.jpg
    profile.svg
    radar.jpeg
    relaxation.jpeg
    search.svg
    split.jpeg
    stranger.jpeg
    stress.jpeg
    youg.jpeg
)

# Loop through the image files and remove any files with the name 
"Zone.Identifier"
for file in "${image_files[@]}"; do
    if [[ "$file" == *Zone.Identifier* ]]; then
        rm "$file"
    fi
done

