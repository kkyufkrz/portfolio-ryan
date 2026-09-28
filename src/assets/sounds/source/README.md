# Sound Assets & Audio Sprites

Folder ini berisi file audio sumber (raw audio) dan metadata audio sprite untuk portfolio.

## Struktur Folder

- `src/assets/sounds/`:
  - `click.mp3` - Efek suara klik global untuk interaksi UI.
  - `sprites/` - Audio sprite yang sudah dikompilasi dan digunakan langsung di aplikasi:
    - `contact.ogg` - Audio sprite untuk efek suara karakter / contact (`gasp`, `snore`).
    - `room.mp3` - Audio sprite untuk efek suara 3D room (`bird`, `keyboard`, `mouse-wheel`, `notification`).
  - `source/` - File audio sumber & konfigurasi spritemap:
    - `contact/`:
      - `gasp.mp3`, `snore.mp3`
      - `sprite.json` (metadata timestamp offset Howler)
    - `room/`:
      - `bird.mp3`, `keyboard.mp3`, `mouse-wheel-0.mp3`, `mouse-wheel-1.mp3`, `mouse-wheel-2.mp3`, `notification.mp3`
      - `sprite.json` (metadata timestamp offset Howler)

## Penggunaan di Aplikasi

Audio sprite didefinisikan di:

- `src/features/sounds/definitions/sprites.ts`
- `src/features/sounds/definitions/sounds.ts`
