import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { OwnerService } from '../../features/survey/Services/Owner.service';
import { Owner } from '../../features/survey/Modules/Owner.module';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-switch-input',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './switch-input.component.html',
  styleUrl: './switch-input.component.css'
})
export class SwitchInputComponent implements OnInit {
  isCreatingNewOwner: boolean = false;
  newOwnerName: string = '';
  owners: Owner[] = [];
  selectedOwnerId?: string;

  @Output() ownerSelected = new EventEmitter<string>();

  constructor(private ownerService: OwnerService) {}

  ngOnInit(): void {
    this.loadOwners();
  }

  loadOwners(): void {
    this.ownerService.getCients().subscribe({
      next:(data) => {
        this.owners = data;
      },
      error:(error) => {
        console.error('Error loading owners:', error);
      }
    });
  }

  createOwner(): void {
    if (this.newOwnerName.trim()) {
      this.ownerService.CreateOnwer(this.newOwnerName).subscribe({
        next : (newOwner) => {
          this.owners.push(newOwner);
          this.selectedOwnerId = newOwner.id;
          this.isCreatingNewOwner = false;
          this.newOwnerName = ''; 
          this.ownerSelected.emit(this.selectedOwnerId);
        },
        error:(error) => {
          console.error('Error creating owner:', error);
        }
      });
    } else {
      alert('Owner name cannot be empty.');
    }
  }

  onOwnerSelect() : void {
    this.ownerSelected.emit(this.selectedOwnerId);
  }

}