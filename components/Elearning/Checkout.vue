<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEntity } from '@/composables/useEntity'; // <- import du composable
import type { CheckoutFormData, LicenseOption, OrderPayload } from '@/types/order';
import { OrderStatus, ProductType } from '@/types/order';

const route = useRoute()
const slug = route.params.slug as string

const formData = ref<CheckoutFormData>({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  position: '',
  department: '',
  package: '5',
  organisation: ''
})

const licenseOptions: LicenseOption[] = [
  { value: '5', label: '5 Learners - £ 1400', price: 1400, learners: 5 },
  { value: '10', label: '10 Learners - £ 1925', price: 1925, learners: 10 },
  { value: '20', label: '20 Learners - £ 2950', price: 2950, learners: 20 },
  { value: '50', label: '50 Learners - £ 6125', price: 6125, learners: 50 },
  { value: '100', label: '100 Learners - £ 10325', price: 10325, learners: 100 },
  { value: '200', label: '200 Learners - £ 19775', price: 19775, learners: 200 },
  { value: '250', label: '250 Learners - £ 24500', price: 24500, learners: 250 },
  { value: 'other', label: 'Other', price: 0, learners: 0 }
]

const isSubmitting = ref(false)
const submitError = ref<string | null>(null)
const submitSuccess = ref(false)

const { createEntity } = useEntity<OrderPayload>({ apiEndpoint: 'orders' })

const isApiError = (res: any): res is { message: string; statusCode: number; details?: any } => {
  return res && typeof res === 'object' && 'message' in res && 'statusCode' in res
}

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    submitError.value = null

    const selectedLicense = licenseOptions.find(opt => opt.value === formData.value.package)
    const totalPrice = selectedLicense?.price || 0

    const courseIri = `/api/courses/${slug}`

    const payload: OrderPayload = {
      firstname: formData.value.firstname,
      lastname: formData.value.lastname,
      email: formData.value.email,
      phone: formData.value.phone || null,
      position: formData.value.position || null,
      department: formData.value.department || null,
      organisation: formData.value.organisation || null,
      package: `${formData.value.package} Learners`,
      totalPrice: totalPrice,
      status: OrderStatus.DRAFT,
      productType: ProductType.ELEARNING_COURSE,
      course: courseIri
    }

    const result = await createEntity(payload)

    if (isApiError(result)) {
      submitError.value = (result.details && (result.details.detail || result.details)) || result.message
      submitSuccess.value = false
    } else {
      // Succès
      submitSuccess.value = true

      formData.value = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        position: '',
        department: '',
        package: '5',
        organisation: ''
      }

      alert('Your enrollment request has been submitted successfully! You will receive a confirmation email at enquiry@governmentexchange.org')
    }
  }
  catch (err: any) {
    console.error('Error submitting order:', err)
    submitError.value = err?.data?.detail || err?.message || 'An error occurred while submitting your enrollment. Please try again.'
    submitSuccess.value = false
  }
  finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-3">
            Sign Up To Start Your Learning Journey.
          </h2>
          <div class="w-16 h-1 bg-primary"></div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <Label for="firstname" class="text-sm font-medium text-gray-700">
                First Name <span class="text-red-500">*</span>
              </Label>
              <Input
                id="firstname"
                v-model="formData.firstname"
                type="text"
                required
                class="w-full"
              />
            </div>

            <div class="space-y-2">
              <Label for="phone" class="text-sm font-medium text-gray-700">
                Phone
              </Label>
              <Input
                id="phone"
                v-model="formData.phone"
                type="tel"
                class="w-full"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <Label for="lastname" class="text-sm font-medium text-gray-700">
                Last Name <span class="text-red-500">*</span>
              </Label>
              <Input
                id="lastname"
                v-model="formData.lastname"
                type="text"
                required
                class="w-full"
              />
            </div>

            <div class="space-y-2">
              <Label for="position" class="text-sm font-medium text-gray-700">
                Position <span class="text-red-500">*</span>
              </Label>
              <Input
                id="position"
                v-model="formData.position"
                type="text"
                required
                class="w-full"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <Label for="email" class="text-sm font-medium text-gray-700">
                Email <span class="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full"
              />
            </div>

            <div class="space-y-2">
              <Label for="department" class="text-sm font-medium text-gray-700">
                Department <span class="text-red-500">*</span>
              </Label>
              <Input
                id="department"
                v-model="formData.department"
                type="text"
                required
                class="w-full"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <Label for="package" class="text-sm font-medium text-gray-700">
                License <span class="text-red-500">*</span>
              </Label>
              <Select v-model="formData.package" required>
                <SelectTrigger id="package" class="w-full">
                  <SelectValue placeholder="5 Learners - £ 1400" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    v-for="option in licenseOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div class="space-y-2">
              <Label for="organisation" class="text-sm font-medium text-gray-700">
                Organisation <span class="text-red-500">*</span>
              </Label>
              <Input
                id="organisation"
                v-model="formData.organisation"
                type="text"
                required
                class="w-full"
              />
            </div>
          </div>

          <div v-if="submitError" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {{ submitError }}
          </div>

          <div v-if="submitSuccess" class="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
            Your enrollment request has been submitted successfully! You will receive a confirmation email.
          </div>

          <div class="flex justify-center pt-4">
            <Button
              type="submit"
              :disabled="isSubmitting"
              class="text-white font-bold px-16 py-6 text-base"
            >
              {{ isSubmitting ? 'SUBMITTING...' : 'ENROLL' }}
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
