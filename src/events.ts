import ready from "./events/ready"
import interactionCreate from "./events/interactionCreate"
import { Event } from "./events/events"

// export const Events: Event[] = [ready]

export const Events: Event[] = [ready, interactionCreate]