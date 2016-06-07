var longurl = 1457896;
var base =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];
var x= 62;
var shorturl=[];
var mode=0;
var i=0;
var j=0,m=0;
var url=0;
var leng=0;
if (longurl==="")
{
	alert("no url");
}
else 
{
	converturl();
	decode();
	
}
function converturl()
{
	i=0;
	while(longurl>=1)
	{
        mode = longurl%62;
        shorturl[i]=base[mode];
        i=i+1;
        longurl=parseInt(longurl/62);
}
var k=0;
while(k<i)
{
	console.log(shorturl[k]);
	k=k+1;
}
}
function decode()
{
		j=shorturl.length-1;
	while(j>=0)
	{
		m=0;
		while(true)
		{
			if(shorturl[j]===base[m])
			{
				break;
			}
			m++;
			}
		url=url*62+m;
		j--;
	}
console.log(url);
}


