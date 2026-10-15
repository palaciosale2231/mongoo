export const starrtDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("conectado");

    }catch (error)
    
    
}