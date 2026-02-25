import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://dinesh06082005_db_user:bhzcCU3xp7l25O3g@cluster0.upduj80.mongodb.net/spend_manager?appName=Cluster0')
    .then(() => {
        console.log('Connected');
        process.exit(0);
    })
    .catch(err => {
        console.log('Error:', err.message);
        process.exit(1);
    });
