const {Pool}= require('pg');
const express=require('express');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const pool=new Pool({
    user:"postgres",
    password:"postgres",
    host:"localhost",
    port:5433,
    database:"store"
});
const app=express();
app.use(cors());
app.use(express.json());

app.get('/users',async (req,res)=>{
    try{
        const AllUsers= await pool.query('SELECT * FROM users order by id');
        res.json(AllUsers.rows);
    }catch(e){
        console.error(e.message);

    }
});
app.get('/orders',async (req,res)=>{
    try{
        const AllOrders= await pool.query('SELECT * FROM orders');
        res.json(AllOrders.rows);
    }catch(e){
        console.error(e.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/orders/counts',async (req,res)=>{
    try {
        const result = await pool.query('SELECT COUNT(*) as counts FROM orders');
        const rowCount = parseInt(result.rows[0].counts, 10);
        res.json({ rowCount });
    } catch (error) {
        console.error('Error fetching row count:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
});
app.post('/orders',async (req,res)=>{
    try{
        const OrderDataArray=req.body;
        const NewOrders=[];
        console.log('OrderDataArray:', OrderDataArray);
        for (let i=0;i<OrderDataArray.length;i++) {
            const NewOrder= await pool.query('INSERT INTO orders(id,user_id,product_id,quantity,date) VALUES($1,$2,$3,$4,current_timestamp) RETURNING *',
                [
                    OrderDataArray[i].id,
                    OrderDataArray[i].user_id,
                    OrderDataArray[i].product_id,
                    OrderDataArray[i].quantity,
                ]);
            NewOrders.push(NewOrder.rows[0]);
        }
        res.json({ message: 'Orders successfully processed', orders: NewOrders });
    }
    catch (err){
        console.error('Error processing orders:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/users/:id',async (req,res)=>{
    const {id}=req.params;
    if(id==='count'){
        try {
            const result = await pool.query('SELECT COUNT(*) as count FROM users');
            const rowCount = parseInt(result.rows[0].count, 10);
            res.json({ rowCount });
        } catch (error) {
            console.error('Error fetching row count:', error);
            res.status(500).json({ error: 'An internal server error occurred' });
        }
    }
    else {
        try {
            const {id} = req.params;
            const user = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
            res.json(user.rows[0]);
        } catch (err) {
            console.error(err.message);
        }
    }
});
app.post('/users',async (req,res)=>{
    try{
        const UserData=req.body;
        const NewUser= await pool.query('INSERT INTO users(id,name,password,email,lastname,country,city,address,zipcode,telephone) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
            [
                UserData.id,
                UserData.name,
                UserData.password,
                UserData.email,
                UserData.lastname,
                UserData.country,
                UserData.city,
                UserData.address,
                UserData.zipcode,
                UserData.telephone]);
        res.json(NewUser);
        const token = jwt.sign({ userId: NewUser.rows[0].id }, 'your-secret-key');
        res.status(200).json({ message: 'Registration successful', token });
        res.status(200).json({ message: 'Registration successful' });
    }
    catch (err){
        console.error(err.message);
        res.status(500).json({error:'Register Failed'});
    }
});
app.listen(5000,()=>{
    console.log('The server is listening on port 5000');
});
