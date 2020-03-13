import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TagEffects} from './store/tag.effects';
import {TAG_FEATURE_NAME, tagReducer} from './store/tag.reducer';
import {UiModule} from '../../ui/ui.module';
import {FormsModule} from '@angular/forms';
import {TagListComponent} from './tag-list/tag-list.component';
import {DialogEditTagsForTaskComponent} from './dialog-edit-tags/dialog-edit-tags-for-task.component';
import {workContextMetaReducer} from '../work-context/store/work-context-meta.reducer';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    StoreModule.forFeature(TAG_FEATURE_NAME, tagReducer),
    EffectsModule.forFeature([TagEffects])
  ],
  declarations: [
    TagListComponent,
    DialogEditTagsForTaskComponent,
    // FindContrastColorPipe
  ],
  entryComponents: [
    DialogEditTagsForTaskComponent,
  ],
  exports: [
    DialogEditTagsForTaskComponent,
    TagListComponent
  ],
})
export class TagModule {
}
