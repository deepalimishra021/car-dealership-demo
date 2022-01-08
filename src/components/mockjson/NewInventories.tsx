import { ICarCardData } from '../models/ICardData'
import maruti from '../../assets/images/marutisuzuki.jpeg'
import nexus from '../../assets/images/nexus.jpeg'
import monarch from '../../assets/images/monarch.jpeg'

export const carData: ICarCardData[]  = [
  {
    id: 1, 
    name: '2017 Maruti',
    price: '$22, 22222',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    carImage: `${maruti}`
  },
  {
    id: 2, 
    name: '2020 Nexus',
    price: '$20, 22222',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    carImage: `${nexus}`
  },
  {
    id: 3, 
    name: '2019 Monarch',
    price: '$10, 22222',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    carImage: `${monarch}`
  }
]
