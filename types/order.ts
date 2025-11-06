/**
 * Types pour l'entité Order correspondant au backend Symfony
 */

/**
 * Payload pour créer une nouvelle commande
 * Correspond à l'entité Order.php du backend
 */
export interface OrderPayload {
  firstname: string
  lastname: string
  email: string
  phone: string | null
  position: string | null
  department: string | null
  organisation: string | null
  package: string
  totalPrice: number
  status: OrderStatus
  productType: ProductType
  course: string // IRI du cours (ex: /api/courses/1)
}

/**
 * Réponse de l'API lors de la création d'une commande
 */
export interface OrderResponse extends OrderPayload {
  id: number
  orderedAt: string
  createdAt: string
  updatedAt: string
}

/**
 * Statuts possibles pour une commande
 * Correspond aux constantes Order::STATUS_* du backend
 */
export enum OrderStatus {
  DRAFT = 'Draft',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed'
}

/**
 * Types de produits possibles
 * Correspond aux constantes Order::PRODUCT_TYPE_* du backend
 */
export enum ProductType {
  ELEARNING_COURSE = 'Elearning Course',
  DEFAULT_COURSE = 'Default Course'
}

/**
 * Options de licence disponibles avec leurs prix
 */
export interface LicenseOption {
  value: string
  label: string
  price: number
  learners: number
}

/**
 * Données du formulaire de checkout
 */
export interface CheckoutFormData {
  firstname: string
  lastname: string
  email: string
  phone: string
  position: string
  department: string
  package: string
  organisation: string
}
