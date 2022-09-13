 ''' The following script validates if users can log-in on AOB ''' 
AIUtil.SetContext Browser("creationtime:=0")
If Browser("name:=Home - Advantage Bank").Page("title:=Home - Advantage Bank").WebButton("class:=sc-bdfBQB knKGBR btn btn-primary","html tag:=BUTTON","value:=Open").Exist Then 
	AIUtil("button", "OPEN").Click
''' To validate if user has been moved successfully on the registration portal the script validates the bank logo present'''
else 
	AIUtil.FindTextBlock("LOGIN").Click
	AIUtil("text_box", "User Name").Type "defaultusername1234xyz"
	AIUtil("text_box", "Password").Type "DefaultPasword@1234"
	AIUtil("button", "", micFromTop, 1).Click
	AIUtil.FindTextBlock("advantage Bank").CheckExists True
End If
''' To validate if user can navigate to Accounts page in order to create new account '''
'AIUtil.FindTextBlock("Accounts").CheckExists True
AIUtil.FindTextBlock("Accounts").Click
''' To validate if user is successfully navigated to accounts page and can see 'open new account' button in order to open a new account '''
AIUtil.FindTextBlock("My Accounts").CheckExists True
AIUtil("button", "OPEN NEW ACCOUNT").CheckExists True
AIUtil("button", "OPEN NEW ACCOUNT").Click
''' To validate if user can enter details on their own to create a new bank account '''
AIUtil("down_triangle", micAnyText, micFromTop, 1).Click
AIUtil.FindTextBlock("USD", micFromTop, 3).Click
AIUtil("down_triangle", micAnyText, micFromBottom, 1).Click
AIUtil.FindTextBlock("Savings Account").Click
AIUtil("text_box", "Name (for your own reference)").Type "Atharva Amrapurkar1"
AIUtil("button", "", micFromBottom, 1).Click

''' Log out the user to test other features '''
'Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebButton("WebButton").Highlight
'Browser("name:=Dashboard - Advantage Bank").Page("title:=Dashboard - Advantage Bank").WebButton("class:=sc-bdfBQB hAGdRi sc-dmlqKv ivYARC btn btn-info","html tag:=BUTTON").Click
'Browser("Dashboard - Advantage").Page("Dashboard - Advantage").WebElement("Logout").Click
'Browser("name:=Dashboard - Advantage Bank").Page("title:=Home - Advantage Bank").WebElement("class:=MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button").Highlight
'AIUtil.FindTextBlock("Logout").Click
'Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Open").Highlight


