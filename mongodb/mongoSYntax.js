db.car.insertMany([{
  "merk": "mercedes benz",
  "cc": 3000,
  "harga": 5000000,
  "tipe": "coupe",
  "pemilik": {
    "nama": "sumbul",
    "alamat": "jalan burangrang"
  },
  "warna": [
    "merah",
    "kuning",
    "hijau"
  ]
},{
  "merk": "ferarri",
  "cc": 3000,
  "harga": 5000000
},{
  "merk": "lambo",
  "cc": 4000,
  "harga": 6000000
},{
  "merk": "buggati",
  "cc": 5000,
  "harga": 7000000
}])

db.car.find({}, {merk:1})

db.car.find({}, {_id:0, merk:1})

db.car.find({}, {_id:0, merk:1}).sort({merk:1})