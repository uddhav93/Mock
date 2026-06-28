function swap()
{
    let a=10,b=20;
    console.log("data before swaping:",a,b);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log("new Values are:",a,b)
}
swap()