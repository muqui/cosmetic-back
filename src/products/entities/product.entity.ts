import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 50, unique: true })
    code: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'integer' })
    quantity: number;

    @Column({ type: 'varchar', length: 50 })
    lot: string;


  //@ManyToOne(() => Formula, formula => formula.products)
  //formula: Formula;

}
