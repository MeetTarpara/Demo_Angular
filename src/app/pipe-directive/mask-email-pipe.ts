import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskEmail',
  standalone: true
})
export class MaskEmailPipe implements PipeTransform {

  
  transform(email: string): string {
    if (!email || !email.includes('@')) {
      return email;
    }

    const [username, domain] = email.split('@');
    const firstChar = username.charAt(0);

    return `${firstChar}***@${domain}`;

     // const maskedPart = '*'.repeat(username.length - 1);
    // return `${firstChar}${maskedPart}@${domain}`;

  }

}
