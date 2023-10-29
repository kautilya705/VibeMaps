import { mutation } from "./_generated/server";
import { v } from "convex/values";

//NEED TO HANDLE REPIITVEV CALLS TO REPLACE OLD SONGS AND NOT ADD NEW SONGS

export const uploadNewUser = mutation({
    args: { email: v.string(), songs: v.array(v.string()) },
    handler: async (ctx, args) => {
      // Print the email and songs to the console
      console.log("Email:", args.email);
      console.log("Songs:", args.songs);

      // const userData = {
      //   email: args.email,
      //   songs: args.songs
      // };

      // const usersNamedAlex = await ctx.db
      //   .query("MusicMaps")
      //   .collect()
      // console.log("testing HERE: ", usersNamedAlex)

      const emailIsInThereOrNot = await ctx.db
        .query("MusicMaps")
        .filter((q) => q.eq(q.field("email"), args.email))
        .collect();


      console.log("lenght: ", emailIsInThereOrNot.length, emailIsInThereOrNot)
      if (emailIsInThereOrNot.length > 0) {
        await ctx.db.replace(emailIsInThereOrNot[0]._id, args);
      }
      else if (args.email && args.email.trim() !== "" && args.songs && args.songs.length > 0) {
        const taskId = await ctx.db.insert("MusicMaps", args);
      }
    },
  });
  