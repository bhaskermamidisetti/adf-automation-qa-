//spec.js

describe('ADF Demo App', function() {

	it('should change provider to ECM', function() {
		browser.get('http://qaexercise.envalfresco.com/settings');
		element(by.id('adf-provider-selector')).sendKeys('ECM');
		element(by.id('adf-provider-selector')).getText().then(function(items) {
			expect(items).toBe('ECM');
		});
		browser.sleep(500);
		element(by.buttonText('APPLY')).click();
		it('alfresco login page opened', function() {
			expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/login');
		});

		it('should open login page', function() {
			browser.get('http://qaexercise.envalfresco.com/settings');
			element(by.id('adf-provider-selector')).sendKeys('ECM');
			element(by.buttonText('APPLY')).click();
			browser.sleep(500);
			it('alfresco login page opened', function() {
				expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/login');
			});
		});
	});
	it('should enter username and password and signin', function() {
		browser.get('http://qaexercise.envalfresco.com/login');
		element(by.id('username')).sendKeys('guest@example.com');
		element(by.id('password')).sendKeys('Password');
		element(by.id('username')).getAttribute('value').then(function(items) {
			expect(items).toBe('guest@example.com');
		});

		element(by.id('password')).getAttribute('value').then(function(items) {
			expect(items).toBe('Password');
		});
		browser.sleep(500);
		element(by.buttonText('SIGN IN')).click();

		expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/home');
	});

	it('should create new folder', function() {
		browser.get('http://qaexercise.envalfresco.com/files');
		element(by.css('[data-automation-id = "create-new-folder"]')).click();
		browser.sleep(500);
		element(by.id('adf-folder-name-input')).sendKeys('M.bhaskar');
		element(by.id('adf-folder-description-input')).sendKeys('Github username is created');
		element(by.id('mat-dialog-title-0')).getText().then(function(items) {
			expect(items).toEqual('New folder');
		});
		element(by.id('mat-dialog-0')).getAttribute('class').then(function(items) {
			expect(items).toContain('ng-star-inserted');
		});
		element(by.id('adf-folder-create-button')).click();
		expect(element(by.id('mat-dialog-0')).isPresent()).toBe(true);
	});

	it('should not create new folder if already exists', function() {
		browser.get('http://qaexercise.envalfresco.com/files');
		element(by.css('[data-automation-id = "create-new-folder"]')).click();
		element(by.id('adf-folder-name-input')).sendKeys('magemello');
		element(by.id('adf-folder-create-button')).click();
		element(by.id('mat-dialog-0')).getAttribute('class').then(function(items) {
			expect(items).toContain('ng-star-inserted');
			console.log("There's already a folder with this name. Try a different name is displayed")

		});
	});

	it('select the folder with gitHub name', function () {
		browser.get('http://qaexercise.envalfresco.com/files');
		element(by.css("img[src='./assets/images/ft_ic_folder.svg']")).click();
		element(by.css("button.mat-icon-button[title='Delete']")).click();
		element(by.css("img[src='./assets/images/ft_ic_folder.svg']")).click();
		element(by.css("button.mat-icon-button[title='Delete']")).click();
		browser.sleep(5000);
	});
});

