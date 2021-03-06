import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from '../avatar';
import { CompositeAvatarComponent } from './composite-avatar.component';

@NgModule({
  imports: [CommonModule, AvatarModule],
  declarations: [CompositeAvatarComponent],
  exports: [CompositeAvatarComponent],
})
export class CompositeAvatarModule {}
