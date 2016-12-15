import { IBeacon } from 'ionic-native';

export class Beacon {

  constructor(){}

  init() {
    console.log('Ibeacon');
    IBeacon.requestAlwaysAuthorization();

    // create a new delegate and register it with the native layer
    let delegate = IBeacon.Delegate();

    // Subscribe to some of the delegate's event handlers
    delegate.didRangeBeaconsInRegion()
      .subscribe(
        data => console.log('didRangeBeaconsInRegion: ', data),
        error => console.error()
      )
    delegate.didStartMonitoringForRegion()
      .subscribe(
        data => console.log('didStartMonitoringForRegion: ', data),
        error => console.error()
      )
    delegate.didEnterRegion()
      .subscribe(
        data => {
          console.log('didEnterRegion: ', data);
        }
      )

    let beaconRegion = IBeacon.BeaconRegion('deskBeacon','E2C56DB5-DFFB-48D2-B060-D0F5A71096E0');

    IBeacon.startMonitoringForRegion(beaconRegion)
      .then(
        () => console.log('Native layer recieved the request to monitoring'),
        error => console.error('Native layer failed to begin monitoring: ', error)
      );
  }

}
