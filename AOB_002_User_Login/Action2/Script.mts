﻿ ''' The following script validates if users can log-in on AOB ''' 
AIUtil.SetContext Browser("creationtime:=0")
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Exist Then 
	AIUtil("button", "OPEN").Click
''' To validate if user has been moved successfully on the registration portal the script validates the bank logo present'''
else 
	AIUtil.FindTextBlock("LOGIN").Click
	AIUtil("text_box", "User Name").Type "defaultusername1234xyz"
	AIUtil("text_box", "Password").Type "DefaultPasword@1234"
	AIUtil("button", "", micFromTop, 1).Click
	AIUtil.FindTextBlock("advantage Bank").CheckExists True
End If


'LoadFunctionLibrary "C:\loginfunctionality.qfl"

'Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebButton("WebButton").Highlight
Browser("name:=Dashboard - Advantage Bank").Page("title:=Dashboard - Advantage Bank").WebButton("class:=sc-bdfBQB hAGdRi sc-dmlqKv ivYARC btn btn-info","html tag:=BUTTON").Click
'Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebElement("Logout").Click
'Browser("name:=Dashboard - Advantage Bank").Page("title:=Home - Advantage Bank").WebElement("class:=MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button").Highlight
AIUtil.FindTextBlock("Logout").Click


AIUtil.SetContext Browser("creationtime:=0")
AIUtil("button", "").Click
AIUtil.FindTextBlock("Logout").Click

