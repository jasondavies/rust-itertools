(function() {var implementors = {};
implementors['itertools'] = ["impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Step.html' title='itertools::Step'>Step</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.MultiPeek.html' title='itertools::MultiPeek'>MultiPeek</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.ISlice.html' title='itertools::ISlice'>ISlice</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Linspace.html' title='itertools::Linspace'>Linspace</a>&lt;F&gt; <span class='where'>where <a class='struct' href='itertools/struct.Linspace.html' title='itertools::Linspace'>Linspace</a>&lt;F&gt;: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a></span>","impl&lt;I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.PadUsing.html' title='itertools::PadUsing'>PadUsing</a>&lt;I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.Iterator.html' title='core::iter::Iterator'>Iterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>) -&gt; I::Item</span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.RepeatN.html' title='itertools::RepeatN'>RepeatN</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Stride.html' title='itertools::Stride'>Stride</a>&lt;'a, A&gt;","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.StrideMut.html' title='itertools::StrideMut'>StrideMut</a>&lt;'a, A&gt;","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Tee.html' title='itertools::Tee'>Tee</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;T, U&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.ZipLongest.html' title='itertools::ZipLongest'>ZipLongest</a>&lt;T, U&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, U: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A,)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A, B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A, B, C&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A, B, C, D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A, B, C, D, E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A, B, C, D, E, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E, F)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A, B, C, D, E, F, G&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E, F, G)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, G: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A, B, C, D, E, F, G, H&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E, F, G, H)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, G: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, H: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;A, B, C, D, E, F, G, H, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.Zip.html' title='itertools::Zip'>Zip</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(A, B, C, D, E, F, G, H, I)</a>&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, B: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, C: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, D: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, E: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, G: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, H: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;T, U&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a> for <a class='struct' href='itertools/struct.ZipSlices.html' title='itertools::ZipSlices'>ZipSlices</a>&lt;T, U&gt; <span class='where'>where T: <a class='trait' href='itertools/misc/trait.Slice.html' title='itertools::misc::Slice'>Slice</a>, U: <a class='trait' href='itertools/misc/trait.Slice.html' title='itertools::misc::Slice'>Slice</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
