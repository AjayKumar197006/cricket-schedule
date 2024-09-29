const mysql=require("mysql2")
require("dotenv").config()

const con=mysql.createConnection(
    {
        host:process.env.host,
        port:process.env.port,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database,
    }
)


function getSchedule()
{
    return new Promise(function(success,reject)
    {
        con.query(`select * from schedule`, function(err,rows)
    {
        if(err)
        {
            reject(err)
        }
        else
        {
            success(rows)
        }
    })

    })
}

function addSchedule(seq,mat,tim)
{
    return new Promise(function(sucess,reject)
{
    
    
    con.query(`INSERT INTO schedule(seq,matches,time) VALUES(?,?,?)`,[seq,mat,tim]), function(err,res)
{
    
    if(err)
    {
        
        reject(err)
    }
    else
    {
        
        sucess(res)
    }
}
})
}

function updateSchedule(ind,mat,tim,id)
{

    return new Promise(function(success,reject)
{
    con.queery(`update schedule set seq=?,matches=?,time=?`,[ind,mat,tim,id]),function(err,res)
    {
        if(err)
        {
            reject(err)
        }
        else
        {
            success(res)
        }
    }

})

}

function deleteSchedule(id)
{
    return new Promise(function(success,reject)
{
      con.query(`delete from schedule where seq=?`,[id],function(err,res)
    {
        if(err)
        {
            reject(err)
        }
        else
        {
            success(res)
        }
    })
})
}
module.exports={getSchedule,addSchedule,updateSchedule,deleteSchedule}