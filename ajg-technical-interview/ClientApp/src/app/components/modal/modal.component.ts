import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SanctionedEntity } from 'src/app/models/sanctioned-entity';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  sanctionEntityForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {

  }


  ngOnInit() {
    this.sanctionEntityForm = this.fb.group({
      name: ['', Validators.required],
      domicile: ['', Validators.required],
      accepted: ['', Validators.required]
    });
  }
  sendForm() {
    const payload: SanctionedEntity = {
      id: '',
      name: this.sanctionEntityForm.controls['name'].value,
      domicile: this.sanctionEntityForm.controls['domicile'].value,
      accepted: this.sanctionEntityForm.controls['accepted'].value === '1' ? true : false,
    }
    this.activeModal.close(payload);
  }

  closeForm() {
    this.activeModal.close();
  }
}
