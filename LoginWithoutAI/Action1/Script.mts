If Browser("name:=Home - Advantage Bank").Page("title:=Home - Advantage Bank").WebButton("class:=sc-bdfBQB knKGBR btn btn-primary","html tag:=BUTTON","value:=Open").Exist Then
	Wait(3)
	Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Click @@ script infofile_;_ZIP::ssf1.xml_;_
''' To validate if user has been moved successfully on the registration portal the script validates the bank logo present'''
else 
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("username").Set "defaultusername1234xyz" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebEdit("password").SetSecure "63215ee0415fd04709c45a571c71f61a33e363422ae0398c8e97013c7786b5a3dfe9b36ff8d248b3b7bc86a4" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Click @@ script infofile_;_ZIP::ssf3.xml_;_
End  If
