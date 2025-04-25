let str="How are you?";
function countVowels(str)
{
    let c=0;
for(let i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="A")
    {
        c++;
    }
        else if(str[i]=="e"||str[i]=="E")
            {
            c++;
        }
            else if(str[i]=="i"||str[i]=="I"){
                c++;}

                else if(str[i]=="o"||str[i]=="O"){
                    c++;}

                    else if(str[i]=="u"||str[i]=="U"){
                        c++;}

                    }
                    alert("total vowels="+c);
                }

countVowels (str);