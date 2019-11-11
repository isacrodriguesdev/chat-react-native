import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import { socket } from '../services/socket';

interface Contact {
  id: string,
  name: string,
  isConnected: boolean,
  photoUrl: string,
  connectionId: any
};

class Phone {

  public static getContacts(): Promise<any> {

    return new Promise(async (send, error) => {

      let contacts: any[] = new Array();
      let phoneNumbers: any[] = new Array();
      //let newContacts: Array<any> = [];

      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      Contacts.getAll((error: any, deviceContacts: any[]) => {

        for (let a = 0; a < deviceContacts.length; a++) {

          let allPhoneNumbers: any = Phone
            .formatNumber(deviceContacts[a].phoneNumbers)

          if (allPhoneNumbers.length === 0) continue;

          contacts.push({
            name: deviceContacts[a].givenName,
            phoneNumbers: allPhoneNumbers,
          });

        };

        for (let a = 0; a < contacts.length; a++) {
          for (let b = 0; b < contacts[a].phoneNumbers.length; b++) {
            phoneNumbers.push(contacts[a].phoneNumbers[b]);
          }
        }

        send(phoneNumbers);

      });

    });
  };

  public static formatNumber(phoneNumbers: string[]) {

    const numbers: string[] = [];

    phoneNumbers.forEach(({ number }: any) => {

      number = number.replace(/\s/g, '');
      number = number.replace(/-/g, '');

      if (!number.includes("+"))
        return;
      if (number.length !== 14)
        return;

      numbers.push(number);

    });

    return numbers;
  }
};

export default Phone;
