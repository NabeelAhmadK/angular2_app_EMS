import { EmployeeManagementSystemPage } from './app.po';

describe('employee-management-system App', function() {
  let page: EmployeeManagementSystemPage;

  beforeEach(() => {
    page = new EmployeeManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
