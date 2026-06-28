function lastDigitrev()
{
    let num=1234,rem,rev=0,c=0;
    while(c<=1)
    {
        rem=num%10;
        rev=(rev*10)+rem;
        num=Math.trunc(num/10);
        c++;
    }
    num=(num*100)+rev
    console.log('Number is:',num)
}
lastDigitrev()