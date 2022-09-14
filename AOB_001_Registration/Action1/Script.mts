 ''' The following script validates if users can register themselves on AOB ''' 
AIUtil.SetContext Browser("creationtime:=0")

''' To validate if user has been moved successfully on the registration portal the script validates the bank logo present'''
'AIUtil.FindTextBlock("dvantage Bank").CheckExists True

If Browser("name:=Home - Advantage Bank").Page("title:=Home - Advantage Bank").WebButton("class:=sc-bdfBQB knKGBR btn btn-primary","html tag:=BUTTON","value:=Open").Exist Then
	Wait(3)
	AIUtil("button", "OPEN").Click
	Wait(3)
	Browser("name:=Dashboard - Advantage Bank").Page("title:=Dashboard - Advantage Bank").WebButton("class:=sc-bdfBQB hAGdRi sc-dmlqKv ivYARC btn btn-info","html tag:=BUTTON").Click
	AIUtil.FindTextBlock("Logout").Click

''' To validate if users can click on 'registration' tab and register themselves with valid credentials '''
'AIUtil.FindTextBlock("REGISTRATION").CheckExists True
AIUtil.FindTextBlock("REGISTRATION").Click
AIUtil("text_box", "First Name").Type "Default_name"
AIUtil("text_box", "Last Name").Type "Default_lastname"
AIUtil("text_box", "Email").Type "defaultname7891011xyz@gmail.com"
AIUtil("text_box", "User Name").Type "defaultusername7891011"
AIUtil("text_box", "Password").Type "DefaultPasword@12234"
AIUtil("text_box", "Confirm Password").Type "DefaultPasword@12234"
AIUtil("button", "", micFromTop, 1).CheckExists True ''' the script checks if the registration button is present or not'''
AIUtil("button", "4 Db").Click
''' To validate if user has been successfully logged in after registration the script vaidates home page of website 
AIUtil.FindTextBlock("advantage Bank").CheckExists True

End  If
'Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebButton("WebButton").Highlight
'Browser("name:=Dashboard - Advantage Bank").Page("title:=Dashboard - Advantage Bank").WebButton("class:=sc-bdfBQB hAGdRi sc-dmlqKv ivYARC btn btn-info","html tag:=BUTTON").Click
'Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebElement("Logout").Click
'Browser("name:=Dashboard - Advantage Bank").Page("title:=Home - Advantage Bank").WebElement("class:=MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button").Highlight
'AIUtil.FindTextBlock("Logout").Click





