import { mutation } from "./_generated/server";
import { v } from "convex/values";

//NEED TO HANDLE REPIITVEV CALLS TO REPLACE OLD SONGS AND NOT ADD NEW SONGS

export const uploadNewUser = mutation({
    args: { email: v.string(), songs: v.array() },
    handler: async (ctx, args) => {
      // Print the email and songs to the console
      console.log("Email:", args.email);
      console.log("Songs:", args.songs);
  
      // I noticed you're referencing args.text, but 'text' is not defined in your arguments.
      // Instead, you might want to structure your data based on your database schema.
      // For example:
      const userData = {
        email: args.email,
        songs: args.songs
      };
  
      const taskId = await ctx.db.insert("VibeMaps", userData);
    },
  });
  