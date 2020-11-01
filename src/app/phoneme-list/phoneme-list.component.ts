import { Component, OnInit } from '@angular/core';

import { phonemes } from '../phonemes';

@Component({
  selector: 'app-phoneme-list',
  templateUrl: './phoneme-list.component.html',
  styleUrls: ['./phoneme-list.component.css']
})
export class PhonemeListComponent {
  phonemes = phonemes;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}