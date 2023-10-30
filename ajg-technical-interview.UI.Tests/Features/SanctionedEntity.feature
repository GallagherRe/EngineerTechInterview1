@Playwright
Feature: Sanctioned Entities

Background: 
	When I am on home page

Scenario:Should display sanctioned entities table
	When I navigate to sanctioned entity page
	Then sanctioned entity list is diplayed with following table headers
	| TableHeaders |
	| 'name', 'domicile', 'status'   | 
	And 'Add Entity' button is showing
	And table pagination is showing
	And table footer is showing total entity count

#Scenario:Should add a new entity to list
#	When I click 'Add Entity' button
#	And I enter following entity details
#	| Name     | Domicile | Approved |
#	| TestUser | Test     | true     |
#	And I click 'Save' button
#	Then following success message is shown
#	| SuccessMessage                       |
#	| Entity has been created successfully |
