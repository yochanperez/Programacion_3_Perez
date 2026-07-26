#!/bin/bash

# Aseguramos que chromium esté instalado
sudo apt update && sudo apt install -y chromium-browser img2pdf

# Carpeta de los HTML
DOM_DIR="$HOME/programacionIII/Modulo 3/dom"

cd "$DOM_DIR"

echo "Procesando archivos HTML _mp..."

for file in *_mp.html; do
    if [ -f "$file" ]; then
        echo "Generando captura de: $file"
        chromium-browser --headless --disable-gpu --screenshot="${file}.png" --window-size=1280,960 "file://$PWD/$file"
    fi
done

echo "Uniendo capturas en un solo PDF..."
img2pdf *_mp.html.png --output "$HOME/programacionIII/Evidencias_Primer_Corte.pdf"

echo "¡Listo! El archivo Evidencias_Primer_Corte.pdf se generó en ~/programacionIII/"
