import { ToasterConfig } from 'angular2-toaster';
import { environment } from '../../../environments/environment';
import { Configuration } from './app.configuration';

describe('Configuration', () => {
  let service: Configuration;
  beforeEach(() => {
    service = new Configuration();
  });

  it('Returns the correct title', () => {
    expect(service.title).toBe('eMeal');
  });

  it('BaseUrl should be azure or localhost', () => {
    const possibleUrls = [
      'http://foodapi4demo.azurewebsites.net/api/',
      'http://localhost:51777/api/'
    ];

    console.log(environment);
    expect(
      possibleUrls.indexOf(environment.server + environment.apiUrl)
    ).toBeGreaterThanOrEqual(0);
  });

  it('BaseUrl ends with a slash', () => {
    const lastChar = environment.apiUrl.slice(-1);
    expect(lastChar).toBe('/');
  });

  it('ToasterConfig is of Type "Toasterconfig"', () => {
    expect(service.toasterConfig).toEqual(jasmine.any(ToasterConfig));
  });

  it('ToasterConfig places toasts on the bottom right corner', () => {
    expect(service.toasterConfig.positionClass).toEqual('toast-bottom-right');
  });
});
