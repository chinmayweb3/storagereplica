-- CreateTable
CREATE TABLE "play" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "uri" TEXT NOT NULL,

    CONSTRAINT "play_pkey" PRIMARY KEY ("id")
);
