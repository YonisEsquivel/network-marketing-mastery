CREATE TABLE `checkout_leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`source` varchar(50) NOT NULL,
	`status` enum('pending','purchased','abandoned') NOT NULL DEFAULT 'pending',
	`emailSequenceStep` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `checkout_leads_id` PRIMARY KEY(`id`)
);
