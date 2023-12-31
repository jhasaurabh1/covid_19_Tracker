import { Component } from '@angular/core';
@Component({
  template: `
      <div class="container">
        <h2 class="text-center mt-4">Welcome to COVID-19 Tracking & Monitoring System</h2>
        <p class="text-center">Here are the services we provide:</p>

        <div class="row justify-content-center mt-5">
            <div class="col-md-4 text-center">
                <a [routerLink]="['/table']">
                    <span nz-icon nzType="dashboard"></span>
                    <h3>Live Statewise Data</h3>
                    <p>Get real-time COVID-19 data for each state.</p>
                </a>
            </div>
            <div class="col-md-4 text-center">
                <a [routerLink]="['/graph']">
                    <span nz-icon nzType="line-chart"></span>
                    <h3>Live Updated Graph</h3>
                    <p>View timely updated graphs for different case types.</p>
                </a>
            </div>
            <div class="col-md-4 text-center">
                <a [routerLink]="['/form']">
                    <span nz-icon nzType="message"></span>
                    <h3>Feedback</h3>
                    <p>We value your feedback. Share your thoughts with us.</p>
                </a>
            </div>
        </div>
    </div>
  `,
  styles : [`
      .box {
      border: 2px solid #ddd;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 5px;
      text-align: center;
      margin: 15px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    }
    
    @media (min-width: 1440px) {
      .box {
        padding: 30px;
        font-size: 18px;
      }
    }
  `]
}) export class HomeComponent {}
