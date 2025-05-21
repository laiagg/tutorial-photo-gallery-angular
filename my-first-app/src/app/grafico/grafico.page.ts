import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; 
import { Chart, registerables } from 'chart.js';
import { NavController } from '@ionic/angular';


Chart.register(...registerables); // Necesario para Ionic

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GraficoPage implements AfterViewInit {
  @ViewChild('barCanvas', { static: false }) barCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('lineCanvas', { static: false }) lineCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieCanvas', { static: false }) pieCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private navCtrl: NavController) {}

  barChart: any;
  lineChart: any;
  pieChart: any;

  ngAfterViewInit() {
    this.createBarChart();
    this.createLineChart();
    this.createPieChart();
  }

  createBarChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['PC', 'Laptop', 'Phone', 'Monitor'],
        datasets: [{
          label: 'Ventas',
          data: [12, 19, 7, 15],
          backgroundColor: ['#f4aafa', '#d678bf', 'pink', '#faaad3']
        }]
      }
    });
  }

  createLineChart() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
        datasets: [{
          label: 'Ventas',
          data: [15, 12, 18, 16],
          borderColor: 'blue',
          fill: false
        }]
      }
    });
  }

  createPieChart() {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: ['PC', 'Laptop', 'Phone'],
        datasets: [{
          label: 'Ventas',
          data: [10, 20, 30],
          backgroundColor: ['#aafae5', '#9cacfc', '#9bdcf5']
        }]
      }
    });
  }


  // volverAtras() {
  //   this.navCtrl.navigateBack('/home');
  // }
}
