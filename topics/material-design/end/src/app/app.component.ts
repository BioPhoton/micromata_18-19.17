import {Component} from '@angular/core'
import {
  ComponentType,
  MdDialog, MdDialogConfig,
  MdSnackBar,
  MdSnackBarConfig,
  MdSnackBarRef,
  SimpleSnackBar
} from '@angular/material'
import {CustomSnackbarComponent} from './components/custom-snackbar/custom-snackbar.component'
import {CustomDialogComponent} from './components/custom-dialog/custom-dialog.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  actualSnackBar: MdSnackBarRef<SimpleSnackBar>;
  customActualSnackBar: MdSnackBarRef<CustomSnackbarComponent>

  constructor(public snackBar: MdSnackBar,
              public dialog: MdDialog) {
  }

  openSnackBar() {
    const message = "This is the snackbar test!";
    const action = "Confirm";
    const config: MdSnackBarConfig = {
      duration: 3000,
    };
    this.actualSnackBar = this.snackBar.open(message, action, config);

    this.actualSnackBar.onAction()
      .subscribe(
        () => { console.log('Snackbar action pressed'); }
      )
  }

  openCustomSnackBar() {
    const component = CustomSnackbarComponent;
    const config: MdSnackBarConfig = {
      duration: 3000,
    };
    this.customActualSnackBar = this.snackBar.openFromComponent(component, config);
  }

  openDialog() {
    const componentOrTemplateRef: ComponentType<CustomDialogComponent> = CustomDialogComponent;
    const config: MdDialogConfig = {
      width: '500px'
    }
    this.dialog.open(componentOrTemplateRef, config);
  }

}
