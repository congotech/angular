import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monster',
  imports: [],
  templateUrl: './monster.html',
  styleUrl: './monster.css',
})
export class Monster implements OnInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private router = inject(Router)

  monsterId = signal<number | undefined>(undefined);
  routeSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
    this.monsterId.set(params['id'] ? parseInt(params['id']) : undefined);
    })
  }

  next() {  
    let nextId = this.monsterId() || 0;
    nextId++
    this.router.navigate(['/monster/' + nextId])
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

}
