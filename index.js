let count=0;
for(let i=1;i<=100;i++)
{
    for(let j=1;j<=100;j++)
    {
        if(i%j===0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log(i);
    }
}