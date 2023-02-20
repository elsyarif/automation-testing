# Skenario pengujian untuk Http Server

Sebuah objek HTTP Server

- Ketika GET /add
    - [x] Harus mengehasilkan response code 200 dan mengembalikan payload hasil pertambahan a dan b secara tepat.
- Ketika GET /subtract
    - [x] Harus menghasilkan response code 200 dan mengembalikan payload value pengurangan a dan b secara tepat.
- Ketika GET /multiply
    - [x] Harus mengahasilkan response 200 dan mengembalikan payload value hasil perkalian a dan b secara tepat.
- Ketika GET /divide
    - [x] Harus menhasilkan response code 200 dan mengembalikan payload value hasil pembagian a dan b secara tepat.
- Ketika GET /rectangle/perimeter/{length}/{width}
    - [x] Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus keliling persegi panjang.
- Ketika GET /rectangle/area/{length}/{width}
    - [x] Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas persegi panjang.
- Ketika GET /triangle/perimeter/{sideA}/{sideB}/{base}
    - [x] Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus keliling segitiga
- Ketika GET /triangle/area/{base}/{height}
    - [x] Harus menghasilkan response code 200 dan mengembalikan payload value hasil perhitungan rumus luas segitiga
