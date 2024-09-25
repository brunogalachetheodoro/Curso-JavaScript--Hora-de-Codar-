let cachorro = {
    patas: 4,
    raca:'srd',
    latir: function() {
        console.log('au au')
    }
}

let labrador = Object.create(cachorro);

labrador.latir()
labrador.raca = 'labrador'
console.log(labrador.raca)

let pastor = Object.create(cachorro)
pastor.raca='pastor alemão'
console.log(pastor.raca)

