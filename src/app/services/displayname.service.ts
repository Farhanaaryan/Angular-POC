import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplaynameService {
  public displayname: string | null = null;
  sessionName: string = ''

  setUsername(username: string): void {
    this.displayname = username;
    this.sessionName = this.displayname
  }

  getUsername(): string | null {
    return this.displayname;
  }

  constructor() { }
}
